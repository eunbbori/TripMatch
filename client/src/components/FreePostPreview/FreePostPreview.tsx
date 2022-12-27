import React, { useEffect, useState } from "react";
import { Container, FreePostList } from "./FreePostPreviewStyle";
import { Link } from "react-router-dom";
import { FreePostType } from "../../type/freePost";

const joinDateFormat = (createdAt: string | undefined) => {
  return (
    createdAt?.slice(0, 4) +
    "." +
    createdAt?.slice(5, 7) +
    "." +
    createdAt?.slice(8, 10)
  );
};

interface FreePostProps {
  freePostList: FreePostType[];
  location: string;
}

const FreePostPreview: React.FC<FreePostProps> = ({
  freePostList,
  location,
}) => {
  const [freePost, setFreePost] = useState<FreePostType[]>([]);

  useEffect(() => {
    const homeFreePost = freePostList.slice(0, 6);
    location === "/" ? setFreePost(homeFreePost) : setFreePost(freePostList);
  }, [freePostList, location]);

  return (
    <div style={{ marginBottom: "30px" }}>
      <Container>
        <FreePostList>
          {freePost.map((item) => {
            return (
              <Link to={`/free/${item.communityId}`} key={item.communityId}>
                <div className="item">
                  <span className="region">[{item.region}]</span>
                  <span className="category">[{item.category}]</span>
                  <span className="itemTitle">{item.title}</span>
                  <span className="createDate">
                    {joinDateFormat(item.createdAt)}
                  </span>
                </div>
              </Link>
            );
          })}
        </FreePostList>
      </Container>
    </div>
  );
};

export default FreePostPreview;
