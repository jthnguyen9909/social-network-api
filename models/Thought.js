const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const { format } = require("date-fns");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    created_at: {
      type: String,
      // use date-fns to format the current date and time
      default: format(new Date(), "PPpp"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
