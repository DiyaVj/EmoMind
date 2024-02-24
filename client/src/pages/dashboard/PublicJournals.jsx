import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import PostCardView from "../../components/PostCardView";
import { Card } from "react-bootstrap";
import formatDate from "../../utils/formatDate";

const PublicJournals = () => {
  const date = "12/4/2024";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/post/all");
        // Reversing as to get latest post on the top.
        response.reverse();
        setPosts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData("08/05/2024 03:05:15");
  }, []);

  return (
    <DashboardLayout>
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <div className="journals-list-text">
              <h2>Want to see what others are upto?</h2>
              <p>
                Read and relate to other people. Probably you can help them in
                some way too? Just drop a friendly comment.
              </p>
            </div>
            <div>
              {posts.map((post) => {
                return <PostCardView post={post} isPrivate={false} />;
              })}
            </div>
          </div>
        )}
      </div>
       {/* Hard coded to show, can be removed later */}
       <Card
        style={{ cursor: "pointer" }}
        className="mb-2 post-card-view"
      >
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
         {formatDate(date)}
        </Card.Header>
        <Card.Body>
          <Card.Title>I am not feeling well today</Card.Title>
          <Card.Text>Recession just hit me up and I got layed off by my company. I am not feeling good right now.</Card.Text>
        </Card.Body>
      </Card>

    </DashboardLayout>
  );
};

export default PublicJournals;
