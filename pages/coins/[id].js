/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import style from "../../styles/CoinDetail.module.css";
import Head from "next/head";

export const getStaticPaths = async () => {
  const data = await axios.get("https://api.coinstats.app/public/v1/coins");

  const coins = data?.data?.coins;

  return {
    paths: coins.map((coin) => ({
      params: { id: coin?.id?.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${params.id}`
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
