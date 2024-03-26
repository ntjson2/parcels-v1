// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

// This function is called when a new mineral is mined.
exports.apiAddMineralID = onRequest(async (req, res) => {

   // Grab the mineralid and userid parameters.
   const mineralID = req.query.mineralid;
   const userID = req.query.userid;
   logger.info("mineralID", mineralID);
   logger.info("userID", userID);

  // Push the mineralid and userid into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
  .collection("minedMinerals")
  .add({mineralid: mineralID, userid: userID });

  // Send back a message that we've successfully written the message
  res.json({result: `Document: ${writeResult.id} with Mineral with ID: ${mineralID} added by user ${userID}.`});

});