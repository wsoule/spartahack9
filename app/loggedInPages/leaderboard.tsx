import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";
import { API_URL } from "../_layout";
export type User = {
  _id: string;
  username: string;
  email: string;
  friends: string[];
  recycled: number;
  sold: number;
  trash: number;
  points: number;
  badges: string[];
  takenItems: string[];
  location: string;
  givenItems: string[];
  selling: number;
  sellingItems: string[];
  items: string[];
  __v: number;
};

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch(`${API_URL}/leaderboard`)
      .then((response) => response.json())
      .then((data) => {
        data.id = data._id;
        setUsers(data);
      })
      .catch((error) => {
        alert(API_URL);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
              <Image source={{ uri: item.badges[0] }} style={styles.badge} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.rank}>{index + 1}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.username}</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>{item.points}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.row}>
            <Text style={styles.cell}>Badge</Text>
            <Text style={styles.cell}>Rank</Text>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Score</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9E9E9E",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 1,
    borderBottomColor: "#388E3C",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4CAF50",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#81C784",
    borderBottomWidth: 1,
    borderBottomColor: "#388E3C",
  },
  infoContainer: {
    width: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 20,
  },
  name: {
    textAlign: "left",
    color: "#F5F5F5",
  },
  rank: {
    textAlign: "left",
    color: "#F5F5F5",
  },
  scoreContainer: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F5F5F5",
  },
});

export default Leaderboard;
