import mongoose from "mongoose";
let Sem5;

try {
    Sem5 = mongoose.model("sem5");
} catch (error) {
  const Sem5Schema = new mongoose.Schema({
   
    subject1:{
        type:[Number],
        default:[],
    },
    subject2:{
        type:[Number],
        default:[],
    },
    subject3:{
        type:[Number],
        default:[],
    },
    subject4:{
        type:[Number],
        default:[],
    },
    subject5:{
        type:[Number],
        default:[],
    },
    subject6:{
        type:[Number],
        default:[],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
  });

  Sem5 = mongoose.model("sem5", Sem5Schema);
}

export default Sem5;
