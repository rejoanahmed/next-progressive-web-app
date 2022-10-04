import { createRxDatabase, RxDatabase, addRxPlugin } from "rxdb";
import { addPouchPlugin, getRxStoragePouch } from "rxdb/plugins/pouchdb";
import collections, { CollectionC } from "./collections";
// import { replicateRxCollection } from "rxdb/plugins/replication";

import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

import { RxDBLeaderElectionPlugin } from "rxdb/plugins/leader-election";
// import { RxDBReplicationCouchDBPlugin } from "rxdb/plugins/replication-couchdb";
addPouchPlugin(require("pouchdb-adapter-idb"));
// addPouchPlugin(require("pouchdb-adapter-http")); // enable syncing over http
addRxPlugin(RxDBLeaderElectionPlugin);
// addRxPlugin(RxDBReplicationCouchDBPlugin);
// addRxPlugin(RxDBDevModePlugin);

declare global {
  interface Window {
    db: any;
  }
}
export type Database = RxDatabase<CollectionC, any, any>;

let dbPromise: Promise<RxDatabase<CollectionC, any, any>> | null = null;
const create = async () => {
  console.log("DatabaseService: creating database..");
  const db = await createRxDatabase<CollectionC>({
    name: "mydb",
    storage: getRxStoragePouch("idb"),
    multiInstance: false,
  });

  console.log("DatabaseService: created database");
  window["db"] = db; // write to window for debugging

  // show leadership in title
  db.waitForLeadership().then(() => {
    document.title = "♛ " + document.title;
  });

  // create collections
  await db.addCollections({ ...collections });

  // replication with postgresql
  // const replicationState = await replicateRxCollection({
  //   collection: db.todos,
  //   replicationIdentifier: "todos-replication-to-http:localhost:3000/api/hello",
  //   retryTime: 1000,
  //   push: {
  //     /**
  //      * Push handler
  //      */
  //     async handler(docs) {
  //       /**
  //        * Push the local documents to a remote REST server.
  //        */
  //       const rawResponse = await fetch("http:localhost:3000/api/hello", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ docs }),
  //       });
  //       /**
  //        * Contains an array with all conflicts that appeared during this push.
  //        * If there were no conflicts, return an empty array.
  //        */
  //       const response = await rawResponse.json();
  //       return response;
  //     },
  //     /**
  //      * Batch size, optional
  //      * Defines how many documents will be given to the push handler at once.
  //      */
  //     batchSize: 5,
  //     /**
  //      * Modifies all documents before they are given to the push handler.
  //      * Can be used to swap out a custom deleted flag instead of the '_deleted' field.
  //      * (optional)
  //      */
  //     modifier: (d) => d,
  //   },
  //   pull: {
  //     /**
  //      * Pull handler
  //      */
  //     async handler(lastCheckpoint, batchSize) {
  //       const minTimestamp = lastCheckpoint ? lastCheckpoint.updatedAt! : 0;
  //       /**
  //        * In this example we replicate with a remote REST server
  //        */
  //       const response = await fetch(
  //         `https://example.com/api/sync/?minUpdatedAt=${minTimestamp}&limit=${batchSize}`
  //       );
  //       const documentsFromRemote = await response.json();
  //       return {
  //         /**
  //          * Contains the pulled documents from the remote.
  //          * Notice: If documentsFromRemote.length < batchSize,
  //          * then RxDB assumes that there are no more un-replicated documents
  //          * on the backend, so the replication will switch to 'Event observation' mode.
  //          */
  //         documents: documentsFromRemote,
  //         /**
  //          * The last checkpoint of the returned documents.
  //          * On the next call to the pull handler,
  //          * this checkoint will be passed as 'lastCheckpoint'
  //          */
  //         checkpoint:
  //           documentsFromRemote.length === 0
  //             ? lastCheckpoint
  //             : {
  //                 id: lastOfArray(documentsFromRemote).id,
  //                 updatedAt: lastOfArray(documentsFromRemote).updatedAt,
  //               },
  //       };
  //     },
  //     batchSize: 10,
  //     /**
  //      * Modifies all documents after they have been pulled
  //      * but before they are used by RxDB.
  //      * (optional)
  //      */
  //     modifier: (d) => d,

  //   },
  // });

  // replication with couchdb
  // const todoreplicationState = db.todos.syncCouchDB({
  //   remote: "http://localhost:3000/api/hello",
  //   options: {
  //     live: true,
  //     retry: true,
  //   },
  // });
  return db;
};

export const get = () => {
  if (!dbPromise) dbPromise = create();
  return dbPromise;
};
