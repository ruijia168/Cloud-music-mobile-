import { Divider, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    fetch(`http://121.40.19.111:3000/playlist/detail?id=${props.id}`)
      .then((res) => res.json())
      .then((body) => {
        const {tracks} = body.playlist
        setData([...data, ...tracks]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
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
        hasMore={data.length < 100}
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
            <List.Item  actions={[<Link to={`/songs/${item.id}`}></Link>]}>
              <List.Item.Meta
                title={<a href="#">{item.name}</a>}
                description={`${item.ar[0].name}-${item.al.name}`}
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