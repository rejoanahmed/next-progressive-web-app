import { Prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import { useRxCollection, useRxDB } from "rxdb-hooks";
import useSWR from "swr";
import { CollectionC } from "../rxdb/collections";
import { Database, get } from "../rxdb/database";
import styles from "../styles/Home.module.css";

// fetcher function
const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Home() {
  //get all the patients and set the response type to Prisma.Patient
  const { data, error } = useSWR("/api/patient", fetcher);
  const [patients, setPatients] = useState([]);

  console.log(data);
  useEffect(() => {
    if (data) {
      const sync = async () => {
        const db = await get();
        const collection = await db.patients;
        // insert the data into the collection
        await data.forEach(async (d) => {
          const { id, updatedAt } = d;
          console.log(id, updatedAt);
          const doc = await collection.findOne(id).exec();
          if (doc) {
            console.log(doc.updatedAt, updatedAt);
            if (doc.updatedAt !== updatedAt) {
              console.log("update");
              await doc.remove();
              await collection.insert(d);
            } else {
              console.log("no update");
            }
          } else {
            console.log("insert");
            await collection.insert(d);
          }
        });
        // get all the data from the collection
        // const Patient = await collection.findOne({ selector: {} })
        // .$.subscribe((da) => {
        //   if (!da) return;
        //   console.log("reload patient-list ");
        //   console.dir(da.toJSON());
        // });
        // set the state to the data from the collection
        // setPatients(Patient);
        // console.dir(Patient);
      };
      sync();
    }
  }, [data]);
  return (
    <div>
      <h1>hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, hic
        vero! Deleniti repudiandae molestias, reprehenderit, impedit minima
        voluptatum eveniet corporis culpa quae assumenda soluta sed doloremque
        cupiditate qui dolore harum.
      </p>
      {/* {data && ()} */}
    </div>
  );
}
