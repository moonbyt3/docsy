import React, { useState, useEffect } from "react";
import {
  LinksListWrapper,
  LinksListGroup,
  LinksListGroupTitle,
  LinksListGroupItems,
  LinksListGroupItemsLink,
} from "./LinksList.css";

import Icon from "../../shared/Icon/Icon";

import Tabletop from "tabletop";

const LinkList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1ouOX_EancYP4lPX4a4qJYzXODyr0bEg9hK8k7dzRMXE",
      simpleSheet: true,
    })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <LinksListWrapper>
      <LinksListGroupTitle>Categories</LinksListGroupTitle>
      <LinksListGroupItems>
        {data.map(({ linkText, linkURL, linkIcon }) => {
          return (
            <LinksListGroupItemsLink key={linkText} href={linkURL}>
              <Icon>{linkIcon}</Icon>
              {linkText}
            </LinksListGroupItemsLink>
          );
        })}
      </LinksListGroupItems>
    </LinksListWrapper>
  );
};

export default LinkList;
