/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import style from "../../styles/CoinDetail.module.css";
import Head from "next/head";

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${id}`
  );

  return {
    props: {
      coinDetail: data?.data?.coin,
    },
  };
};

export default function CoinDetails({ coinDetail }) {
  return (
    <>
      <Head>
        <title>{coinDetail.name}</title>
      </Head>

      <div className={style.coinDetail}>
        <div>
          <img src={coinDetail.icon} alt={`Icon ${coinDetail.name}`} />
          <p>Coin: {coinDetail.name}</p>
          <p>Rank: {coinDetail.rank}</p>
          <p>Price: {coinDetail.price}</p>
        </div>
      </div>
    </>
  );
}
