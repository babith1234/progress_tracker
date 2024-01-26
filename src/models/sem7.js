import mongoose from "mongoose";
let Sem7;

try {
    Sem7 = mongoose.model("sem7");
} catch (error) {
  const Sem7Schema = new mongoose.Schema({
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

  Sem7 = mongoose.model("sem7", Sem7Schema);
}

export default Sem7;
