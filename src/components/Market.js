import React, { useState } from 'react';
import Layout from './layouts/Layout';
import '../styles/Market.scss';
import StoreElement from './StoreElement';

const Market = () => {
  const [stores, setStores] = useState([
    {
      description: '대게, 킹크랩, 꽃게 전문 노량진수산시장 부안꽃게',
      uri: '/노량진수산시장부안꽃게',
      state: 'OPEN',
      tags: ['today-price'],
      id: '0000000813',
      label: '부안꽃게',
      thumbnail:
        'https://cdn.tpirates.com/files/etc/2019/0116/612f44963ab75e0f05691eade26b10d6_FThumb.jpg',
      summary: {
        comments: 906,
        rating: 4.9,
      },
      market: '노량진수산시장',
      favorite: 'off',
    },
    {
      description: '마장동축산물시장 석신한우에서 1+,1++등급 소고기를 저렴하게 맛보실 수 있습니다.',
      uri: '/마장동축산물시장석신한우',
      state: 'OPEN',
      tags: ['today-price'],
      id: '0000000030',
      label: '석신한우',
      thumbnail:
        'https://cdn.tpirates.com/files/etc/2018/1120/d1b7db8929898057178dc5d914b9f09b_FThumb.jpg',
      summary: {
        comments: 1021,
        rating: 4.6,
      },
      market: '마장축산물시장',
      favorite: 'off',
    },
    {
      description: '구리시장 갑각류, 참치 전문 점포 5문앞 첫집(항도유통)',
      uri: '/구리농수산물시장오문앞첫집항도유통',
      state: 'OPEN',
      tags: ['today-price'],
      id: '0000000863',
      label: '5문앞 첫집(항도유통)',
      thumbnail:
        'https://cdn.tpirates.com/files/etc/2019/0322/2558dfc8ad72977f467bd2fb9d285767_FThumb.jpg',
      summary: {
        comments: 449,
        rating: 4.7,
      },
      market: '구리농수산물시장',
      favorite: 'off',
    },
  ]);
  return (
    <Layout>
      <main className="market-root">
        <section className="store-container">
          <h1>프리미엄 가게</h1>
          {stores.map((s, i) => {
            return <StoreElement key={i} storeData={s} />;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Market;
