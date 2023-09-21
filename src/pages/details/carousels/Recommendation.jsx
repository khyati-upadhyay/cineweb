import React from "react";
import { Carousel } from "../../../components";
import { useFetch } from "../../../hooks";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    data?.results?.length > 0 && (
      <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    )
  );
};

export default Recommendation;
