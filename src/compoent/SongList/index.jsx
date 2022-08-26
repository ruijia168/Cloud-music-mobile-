import { Divider, List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './index.css'
const App = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`http://121.40.19.111:3000/search?keywords=${props.keyword}`)
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.result.songs]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  
  // function Send(id){
  //   window.location.href=`/songs/${id}`
  // }
  return (
    <div
      id="Search-SongList"
      style={{
        height:`80vh`,
        overflow: 'auto',
        padding: '0 16px',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 40}
        loader={
          <Skeleton
            
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item 
            actions={[<Link to={`/songs/${item.id}`}></Link>]}>
            <List.Item.Meta
              title={item.name}
              description={`${item.artists[0].name}-${item.album.name}`}
            />
             <div className="icon-play">&#xe624;</div>
          </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default App;