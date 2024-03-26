
import React, { useEffect, useState } from 'react';
import db from './firestore';
import { collection, onSnapshot } from 'firebase/firestore';

interface Parcel {
  id: string;
  name: string;
  depth: number;
  parcelData: string;
  value: number;
}

interface Props {
  parcels: Parcel[];
}

const ParcelList: React.FC<Props> = () => {
  // State to store the parcels
  const [parcels, setParcels] = useState([])
  console.log(parcels);

  useEffect(
    ()=> 
    // Using onSnapshot as it is like a react hook
    // Use th doc ID as a general row id
    onSnapshot(collection(db,"p3"), (snapshot) => {
        const snapDoc:any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          name: doc.data().name,
          depth: doc.data().depth,
          parcelData: doc.data().parcelData,
          value: doc.data().value
        }));
        setParcels(snapDoc);
      }
    ),
    []
  );  
  return (
    <div className="p-3">
      <h2>Parcel Data</h2> {/* Added header */}
      <h6>This is a firestore list of current parcel data</h6>
      <div className="row">
        {parcels.map((parcel: Parcel) => (
          <div key={parcel.id} className="col-md-3">
            <div className="card mb-3" style={{background: 'linear-gradient(to right, rgba(0, 120, 0, 0.05), rgba(0, 255, 0, 0.01))'}}>
              <div className="card-body">
                <h5 className="card-title text-success">{parcel.name}</h5>
                <p className="card-text">Depth: {parcel.depth}</p>
                <p className="card-text">Parcel Data: {parcel.parcelData}</p>
                <p className="card-text">Value: {parcel.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParcelList;