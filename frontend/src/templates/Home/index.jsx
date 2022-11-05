import axios from "axios";
import P from "prop-types";
import { useEffect, useState } from "react";
import { CarComponent } from "../../components/CarComponent";
import { LoadingComponent } from "../../components/LoadingComponent";
import { SectionComponent } from "../../components/SectionComponent";
import * as Styled from "./styles";

export const Home = ({}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const raw = await axios("http://localhost:3000/car");
      console.log(raw.data.data);

      setData(raw.data.data);
      console.log(data);
    };
    fetchData();
    console.log(data);
  }, []);

  if (!data) {
    return <LoadingComponent />;
  }

  return (
    <Styled.MainContainer>
      <SectionComponent>
        {data.map((val) => (
          <CarComponent data={val} key={val._id} />
        ))}
      </SectionComponent>
    </Styled.MainContainer>
  );
};

Home.propTypes = {};
