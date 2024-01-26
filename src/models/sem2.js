import mongoose from "mongoose";
let Sem2;

try {
    Sem2 = mongoose.model("sem2");
} catch (error) {
  const Sem2Schema = new mongoose.Schema({
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

  Sem2 = mongoose.model("sem2", Sem2Schema);
}

export default Sem2;
