function compareTriplets(a, b) {
    var alice = (a[0] > b[0]) + (a[1] > b[1]) + (a[2] > b[2]);
      var bob = (a[0] < b[0]) + (a[1] < b[1]) + (a[2] < b[2]);
      return [alice, bob];
    }