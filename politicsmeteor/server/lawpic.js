Slingshot.fileRestrictions("LawPic", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
  maxSize: 2 * 500 * 500 // 2 MB (use null for unlimited)
});

Slingshot.createDirective("LawPic", Slingshot.S3Storage, {
  bucket: "appolitique",
  AWSAccessKeyId: "AAAAAAAA",
  AWSSecretAccessKey: "CCCCCC",
  region: "eu-west-3",
  acl: "public-read",

  authorize: function(file, metaContext) {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files"; //Works
      throw new Meteor.Error("Login Required", message);
    }
    return true;
  },

  key: function(file, metaContext) {
    //Access of the LawId through metaContext
    var currentLawId = metaContext;
    // console.log(metaContext, "metaContext");
    // console.log(currentLawId, "currentLawId");
    var metaString = metaContext.toString;
    return "images" + "/" + Date.now() + "-" + file.name;
  }
});
