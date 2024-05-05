const transactionSchema = {
  note: String,
  amount: Number,
  fromAccountId: String,
  toAccountId: String,
};

module.exports = transactionSchema;
