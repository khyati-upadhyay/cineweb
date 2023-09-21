import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { Recommendation, Similar } from "./carousels";
import { Cast } from "./cast";
import { DetailsBanner } from "./detailsBanner";
import { Videos } from "./videos";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Videos data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
