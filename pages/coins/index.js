/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};

const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <h1>{coin.name}</h1>
            <Link href={`/coins/${coin.id}`}>
              <a>
                <img src={coin.icon} alt="Coin Icon" />
              </a>
            </Link>
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoinList;
