import { useEffect } from "react";
import { useAuth } from "../../hooks/authContext";

const { user } = useAuth();

const [historyData, setHistoryData] = useState([])

async function getHistoryData() {
    const historyRef = collection(doc(db, "users", user), "history");
    const snapshot = await getDoc(historyRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
  }

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getHistoryData()
      setHistoryData(data)
    } 
    fetchdata()
  },[])