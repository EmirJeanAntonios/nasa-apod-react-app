import { SyntheticEvent, useEffect, useState } from "react";
import Apod from "./components/Apod/Apod";
import Loading from "./components/Loading/Loading";
import MenuItem from "./components/MenuItem/MenuItem";
import GridContainer from "./containers/GridContainer/GridContainer";

import { useApodApi } from "./hooks/useApodApi";
import { ApodRequest } from "./interfaces/IApodResponse";

function App() {
  const { data, isLoading, error } = useApodApi();
  const [display, setDisplay] = useState<ApodRequest>();

  useEffect(() => {
    if (data != undefined) {
      setDisplay(data[0]);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (error.error) {
    console.error("error", error);
  }

  const menuItemClickEvent = (e: SyntheticEvent): void => {
    setDisplay(
      data?.filter((item) => item != display)[parseInt(e.currentTarget.id)] ||
        undefined
    );
  };

  return (
    <>
      <GridContainer>
        <div className="apod_display">
          <Apod
            background={display?.hdurl}
            explanation={display?.explanation}
            title={display?.title}
          />
        </div>
        <div className="apod_list">
          {data &&
            data
              .filter((item) => item != display)
              .map((apod, index) => {
                return (
                  <MenuItem onClick={menuItemClickEvent} id={index} key={index}>
                    <Apod
                      title={apod.title}
                      background={apod.url}
                      explanation={apod.explanation}
                    />
                  </MenuItem>
                );
              })}
        </div>
      </GridContainer>
    </>
  );
}

export default App;
