import axios from "axios";
import P from "prop-types";
import { useEffect, useState } from "react";

import { CarComponent } from "../../components/CarComponent";
import { LoadingComponent } from "../../components/LoadingComponent";
import { SectionComponent } from "../../components/SectionComponent";
import * as Styled from "./styles";

export const Home = ({}) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const raw = await axios("http://localhost:3000/car");
      setData(raw.data.data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    //if (!search) return setResults(data);
    if (search) {
      const filteredData = data.filter((val) =>
        val.nome.toLowerCase().includes(search.toLowerCase()),
      );

      return filteredData ? setResults(filteredData) : data;
    }
  }, [search]);

  if (!data) {
    return <LoadingComponent />;
  }

  return (
    <Styled.MainContainer>
      <Styled.Title>Home</Styled.Title>
      <Styled.Input
        type="text"
        placeholder="Digite o nome do carro desejado"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <SectionComponent>
        {search
          ? results.map((val) => <CarComponent data={val} key={val._id} />)
          : data.map((val) => <CarComponent data={val} key={val._id} />)}
      </SectionComponent>
    </Styled.MainContainer>
  );
};

Home.propTypes = {};
