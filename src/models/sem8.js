import mongoose from "mongoose";
let Sem8;

try {
  Sem8 = mongoose.model("sem8");
} catch (error) {
  const Sem8Schema = new mongoose.Schema({
    subject1: {
      type: [Number],
      default: [],
    },
    subject2: {
      type: [Number],
      default: [],
    },
    subject3: {
      type: [Number],
      default: [],
    },
    subject4: {
      type: [Number],
      default: [],
    },
    subject5: {
      type: [Number],
      default: [],
    },
    subject6: {
      type: [Number],
      default: [],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  });

  Sem8 = mongoose.model("sem8", Sem8Schema);
}

export default Sem8;
