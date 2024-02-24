import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import PostCardView from "../../components/PostCardView";
import { useUserAuth } from "../../contexts/UserAuthContext";

const PrivateJournals = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { user } = useUserAuth();

  const deletePostFromArray = (id) => {
    const updatedPosts = posts.filter((post) => post._id !== id);
    setPosts(updatedPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let userId = "";
      try {
        const authResponse = await axios.get("auth/get-user-by-email", {
          params: {
            email: user.email,
          },
        });
        userId = authResponse.data[0]._id;
      } catch (error) {
        console.log("Error fetching user by email", error);
      }
      try {
        const { data: response } = await axios.get("/post/get-posts-by-user", {
          params: {
            user_id: userId,
          },
        });
        // Reversing as to get latest post on the top.
        response.reverse();
        setPosts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <div className="journals-list-text">
              <h2>Ready to reflect back on your thoughts?</h2>
              <p>
                Reflecting back on yourself is a great way of self-help and
                personal growth.
              </p>
            </div>
            <div>
              {posts.map((post) => {
                return (
                  <PostCardView
                    post={post}
                    isPrivate={true}
                    deletePostFromArray={deletePostFromArray}
                  />
                );
              })}
            </div>
          </div>
        )}
         {/* Hard coded to show, can be removed later */}
        <Card
        style={{ cursor: "pointer" }}
        className="mb-2 post-card-view"
      >
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <FaTrashAlt />
        </Card.Header>
        <Card.Body>
          <Card.Title>Today I hosted a great Session</Card.Title>
          <Card.Text>My day went well and I did my best hosting an amazing session.</Card.Text>
        </Card.Body>
      </Card>
      </div>
    </DashboardLayout>
  );
};

export default PrivateJournals;
