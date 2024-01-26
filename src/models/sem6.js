import mongoose from "mongoose";
let Sem6;

try {
    Sem6 = mongoose.model("sem6");
} catch (error) {
  const Sem6Schema = new mongoose.Schema({
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

  Sem6 = mongoose.model("sem6", Sem6Schema);
}

export default Sem6;
