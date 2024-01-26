import mongoose from "mongoose";
let Sem3;

try {
    Sem3 = mongoose.model("sem3");
} catch (error) {
  const Sem3Schema = new mongoose.Schema({
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

  Sem3 = mongoose.model("sem3", Sem3Schema);
}

export default Sem3;
