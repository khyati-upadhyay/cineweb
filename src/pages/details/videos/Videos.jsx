import React, { useState } from "react";
import "./style.scss";
import { ContentWrapper, Img, VideoPopup, PlayIcon } from "../../../components";

const Videos = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    data?.results?.length > 0 && (
      <div className="videosSection">
        <ContentWrapper>
          <div className="sectionHeading">Official Videos</div>
          {!loading ? (
            <div className="videos">
              {data?.results?.map((videoItem) => (
                <div
                  key={videoItem?.id}
                  onClick={() => {
                    setVideoId(videoItem.key);
                    setShow(true);
                  }}
                  className="videoItem"
                >
                  <div className="videoThumbnail">
                    <Img
                      src={`https://img.youtube.com/vi/${videoItem.key}/mqdefault.jpg`}
                    />
                    <PlayIcon />
                  </div>
                  <div className="videoTitle">{videoItem?.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="videoSkeleton">
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
            </div>
          )}
        </ContentWrapper>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    )
  );
};

export default Videos;
