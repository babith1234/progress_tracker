import mongoose from "mongoose";
let Sem4;

try {
    Sem4 = mongoose.model("sem4");
} catch (error) {
  const Sem4Schema = new mongoose.Schema({
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

  Sem4 = mongoose.model("sem4", Sem4Schema);
}

export default Sem4;
