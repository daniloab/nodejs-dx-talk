db.Charge.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$paidAt" } },
      totalValue: { $sum: "$valueWithDiscount" },
    },
  },
  {
    $merge: {
      into: "ChargeByDay",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "insert",
    },
  },
]);
