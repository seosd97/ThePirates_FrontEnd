import React, { useEffect, useState } from 'react';
import Layout from './layouts/Layout';
import '../styles/Market.scss';
import StoreElement from './StoreElement';
import Search from './layouts/Search';
import Banner from './layouts/Banner';
import Dropdown from './layouts/Dropdown';
import DataApi from '../dataAPI';

const handleDropdown = (e) => {
  const items = e.target.parentNode.getElementsByClassName('ui-dropdown');
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');

    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('disabled')) {
        items[i].classList.remove('disabled');
      }
    }
    return;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i] === e.target) {
      e.target.classList.add('active');

      if (items[i].classList.contains('disabled')) {
        items[i].classList.remove('disabled');
      }
      continue;
    }

    if (items[i].classList.contains('active')) {
      items[i].classList.remove('active');
    }
    items[i].classList.add('disabled');
  }
};

const renderFilterDesc = (filter, onClick) => {
  if (filter.filterZone === '' && filter.filterSearch === '') {
    return null;
  }

  return (
    <div id="filter-desc">
      <span>{filter.filterZone !== '' && `${filter.filterZone} 지역의`}</span>
      <span>{filter.filterSearch !== '' && `${filter.filterSearch} 검색결과`}</span> 가게목록입니다.
      <span onClick={onClick}> [돌아가기]</span>
    </div>
  );
};

const Market = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [marketData, setMarketData] = useState({
    bannerData: [],
    itemData: [],
    storeData: [],
    zoneData: [],
  });

  const [storeData, setStoreData] = useState([]);
  const [filter, setFilter] = useState({ filterZone: '', filterSearch: '' });

  useEffect(() => {
    DataApi.getData().then((d) => {
      setMarketData(d);
      setStoreData(d.storeData.slice(0, 10));
      setIsLoading(false);
    });
  }, [isLoading]);

  return (
    <Layout>
      <main className="market-root">
        <section className="market-header">
          <Banner bannerDatas={marketData.bannerData} />
          <div id="filter-container">
            <Dropdown
              menuDatas={marketData.zoneData}
              rowCount={3}
              onClick={handleDropdown}
              onChange={(v) => {
                setFilter((prev) => {
                  return { ...prev, filterZone: v };
                });
              }}
            />
            <Dropdown menuDatas={marketData.itemData} rowCount={3} onClick={handleDropdown} />
            <Dropdown
              menuDatas={[
                {
                  label: '기본 순',
                  code: '0',
                },
              ]}
              onClick={handleDropdown}
            />
          </div>
          <Search
            placeholder="검색어를 입력하세요."
            onSubmit={(v) =>
              setFilter((prev) => {
                return { ...prev, filterSearch: v };
              })
            }
          />
        </section>
        <section className="store-container">
          {renderFilterDesc(filter, () => setFilter({ filterZone: '', filterSearch: '' }))}
          <h1>프리미엄 가게</h1>
          {storeData.map((s, i) => {
            return <StoreElement key={i} storeData={s} />;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Market;
