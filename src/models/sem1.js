import mongoose from "mongoose";

let Sem1;

try {
    Sem1 = mongoose.model("sem1");
} catch (error) {
  const Sem1Schema = new mongoose.Schema({
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

  Sem1 = mongoose.model("sem1", Sem1Schema);
}

export default Sem1;
