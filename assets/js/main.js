


const user_list=[
    {
      "first_name": "mathi",
      "last_name": "p",
      "user_name": "mathi02",
      "dob": "2023-05-04",
      "email": "thosh@gmail.com",
      "mobile_number": "8925054114",
      "password": "Mathi@2002",
      "confirm_password": "Mathi@2002",
      "user_bio": "CEO of thattu murukku.",
      "uuid": "421095c0-c83c-49f0-a96b-1766fefc020f",
      "user_dp": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670721/rptn6wpnxcbpmcgectju.jpg",
      "user_cover_img": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670725/yug4wmvzmvrkq8eloljb.jpg"
    },
    {
      "first_name": "Maruthan",
      "last_name": "Alagar",
      "user_name": "maruthu02",
      "dob": "2023-02-05",
      "email": "maruthu@gmail.com",
      "mobile_number": "7825054118",
      "password": "Maruthu@2002",
      "confirm_password": "Maruthu@2002",
      "user_bio": "perungudi councillor",
      "uuid": "00dafb1a-4129-4357-a8d4-8d500b09e3bf",
      "user_dp": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684671076/igea6fbxkhepra1cydif.jpg",
      "user_cover_img": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684671087/u0zzcx13zxdfpbmnzlxa.jpg"
    },
    {
      "first_name": "Narendra",
      "last_name": "Modi",
      "user_name": "modi02",
      "dob": "2023-05-19",
      "email": "modi@gmail.com",
      "mobile_number": "8925054224",
      "password": "Modi@2002",
      "confirm_password": "Modi@2002",
      "user_bio": "Prime Minister of India",
      "uuid": "a94b763f-9a02-4f41-afc1-574c16e6c7a9",
      "user_dp": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670108/kyikqhklce0d8rhltfzx.jpg",
      "user_cover_img": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670119/cwykqsqlbuivoydcoqth.jpg"
    },
    {
      "first_name": "IRCTC",
      "last_name": "D",
      "user_name": "IRCTCoff",
      "dob": "2022-02-17",
      "email": "irctc@gmail.com",
      "mobile_number": "7925054118",
      "password": "Irctc@2002",
      "confirm_password": "Irctc@2002",
      "user_bio": "The official account of Indian Railway Catering & Tourism Corporation Ltd, Public Sector Undertaking under Ministry of Railways, Government of India.",
      "uuid": "b9a54f27-cb52-42d5-9ab5-520a5c9d02bc",
      "user_dp": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670407/hlgpzxmpymjksrd0mvya.jpg",
      "user_cover_img": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670413/p6kmnxpsag7k8mpq1f69.jpg"
    }
  ]


  const follow_data=[
    {
      "following": "IRCTCoff",
      "followee": "modi02"
    },
    {
      "following": "modi02",
      "followee": "IRCTCoff"
    },
    {
      "following": "maruthu02",
      "followee": "IRCTCoff"
    },
    {
      "following": "IRCTCoff",
      "followee": "mathi02"
    },
    {
      "following": "modi02",
      "followee": "mathi02"
    },
    {
      "following": "maruthu02",
      "followee": "mathi02"
    },
    {
      "following": "mathi02",
      "followee": "maruthu02"
    },
    {
      "following": "modi02",
      "followee": "maruthu02"
    },
    {
      "following": "IRCTCoff",
      "followee": "maruthu02"
    }
  ]


  const comment_list=[
    {
      "name": "Maruthan Alagar",
      "unic_id": "c72f3403-f20e-4bcd-9771-c0f30098db05",
      "user_name": "maruthu02",
      "comment_content": "awesome g",
      "newdate": "2023-05-21T12:13:59.350Z",
      "comment_post_id": "21c6743d-7edd-48b3-8b29-a2b8a7f953bc"
    },
    {
      "name": "mathi p",
      "unic_id": "a2be1b3b-de37-49b0-b00d-1e0581c27e99",
      "user_name": "mathi02",
      "comment_content": "super g.",
      "newdate": "2023-05-21T12:14:46.382Z",
      "comment_post_id": "21c6743d-7edd-48b3-8b29-a2b8a7f953bc"
    },
    {
      "name": "mathi p",
      "unic_id": "40a1e9db-5b1e-4b3f-8cc4-bda1e9751963",
      "user_name": "mathi02",
      "comment_content": "great work ",
      "newdate": "2023-05-21T12:15:24.679Z",
      "comment_post_id": "88e382d5-0816-4e15-9c3f-6f771da2fdaf"
    }
  ]


  const like_data=[
    {
      "liked": "21c6743d-7edd-48b3-8b29-a2b8a7f953bc",
      "who_liked": "maruthu02"
    },
    {
      "liked": "ec4c0e24-b4bb-448d-bad8-ef96cdee2374",
      "who_liked": "maruthu02"
    },
    {
      "liked": "15bdcddb-283f-42c3-a01d-f11d44905402",
      "who_liked": "maruthu02"
    },
    {
      "liked": "88e382d5-0816-4e15-9c3f-6f771da2fdaf",
      "who_liked": "maruthu02"
    },
    {
      "liked": "02e02b58-216e-4e63-9ee5-dec194027149",
      "who_liked": "maruthu02"
    },
    {
      "liked": "56b66da8-4568-452d-b8e7-3440c5671020",
      "who_liked": "maruthu02"
    }
  ]


  const post_feedd=[
    {
      "post_id": "21c6743d-7edd-48b3-8b29-a2b8a7f953bc",
      "unic_id": "modi02",
      "user_name": "Narendra Modi",
      "post_content": "The talks with President \n@LulaOficial\n were productive and wide ranging. India and Brazil will keep working together to deepen trade ties. We also discussed diversifying cooperation in sectors like agriculture, defence and more. ",
      "post_img": {
        "src": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684669958/baltt1onsqbwhd5cfe1e.png",
        "alt": ""
      },
      "like": 1,
      "delete_bn": "21c6743d-7edd-48b3-8b29-a2b8a7f953bc",
      "post_date": "2023-05-21T11:53:02.317Z"
    },
    {
      "post_id": "ec4c0e24-b4bb-448d-bad8-ef96cdee2374",
      "unic_id": "modi02",
      "user_name": "Narendra Modi",
      "post_content": "The meeting with PM \n@RishiSunak\n was a very fruitful one. We discussed boosting cooperation in trade, innovation, science and other such sectors.",
      "post_img": {
        "src": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670043/tmrajmtqqidcelyvrczp.jpg",
        "alt": ""
      },
      "like": 1,
      "delete_bn": "ec4c0e24-b4bb-448d-bad8-ef96cdee2374",
      "post_date": "2023-05-21T11:54:10.867Z"
    },
    {
      "post_id": "15bdcddb-283f-42c3-a01d-f11d44905402",
      "unic_id": "modi02",
      "user_name": "Narendra Modi",
      "post_content": "It has been a fruitful visit to Japan. Met several world leaders during the G-7 Summit and discussed a variety of issues with them. Gratitude to PM \n@kishida230\n, the Government and people of Japan for their warmth. Leaving for Papua New Guinea in a short while.",
      "post_img": {
        "src": "",
        "alt": ""
      },
      "like": 1,
      "delete_bn": "15bdcddb-283f-42c3-a01d-f11d44905402",
      "post_date": "2023-05-21T11:54:30.696Z"
    },
    {
      "post_id": "88e382d5-0816-4e15-9c3f-6f771da2fdaf",
      "unic_id": "IRCTCoff",
      "user_name": "IRCTC D",
      "post_content": "JYOTIRLINGA YATRA-Bharat Gaurav Special Tourist train under ‘Ek Bharat Sreshtha Bharat’ was flagged off by General Manager Eastern Railway from Kolkata on 20/05/2023. This 11 Nights/ 12 Days.",
      "post_img": {
        "src": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670561/palv9xbeav93jacjj5zg.jpg",
        "alt": ""
      },
      "like": 1,
      "delete_bn": "88e382d5-0816-4e15-9c3f-6f771da2fdaf",
      "post_date": "2023-05-21T12:02:44.501Z"
    },
    {
      "post_id": "02e02b58-216e-4e63-9ee5-dec194027149",
      "unic_id": "IRCTCoff",
      "user_name": "IRCTC D",
      "post_content": "Here's your chance to venture into the ancient city of Varanasi. Visit the city's various sacred locations along with Sarnath on the Varanasi ex Jodhpur-Jaipur #tour. ",
      "post_img": {
        "src": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670657/atu0kc81vszynmm01fri.jpg",
        "alt": ""
      },
      "like": 1,
      "delete_bn": "02e02b58-216e-4e63-9ee5-dec194027149",
      "post_date": "2023-05-21T12:04:21.796Z"
    },
    {
      "post_id": "56b66da8-4568-452d-b8e7-3440c5671020",
      "unic_id": "mathi02",
      "user_name": "mathi p",
      "post_content": "Master minds ..",
      "post_img": {
        "src": "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684670844/p95n2naxulcwiryosnsq.jpg",
        "alt": ""
      },
      "like": 1,
      "delete_bn": "56b66da8-4568-452d-b8e7-3440c5671020",
      "post_date": "2023-05-21T12:07:43.627Z"
    }
  ]


  if(!JSON.parse(localStorage.getItem("user_list"))){
localStorage.setItem(("user_list"),JSON.stringify(user_list));
console.log("user_list stored")
  }

  if(!JSON.parse(localStorage.getItem("follow_data"))){
    localStorage.setItem(("follow_data"),JSON.stringify(follow_data));
    console.log("follow_data stored")
  }

  if(!JSON.parse(localStorage.getItem("comment_list"))){
    localStorage.setItem(("comment_list"),JSON.stringify(comment_list));
    console.log("comment_list stored")
  }

  if(!JSON.parse(localStorage.getItem("like_data"))){
    localStorage.setItem(("like_data"),JSON.stringify(like_data));
    console.log("like_data stored")
  }

  if(!JSON.parse(localStorage.getItem("post_feedd"))){
    localStorage.setItem(("post_feedd"),JSON.stringify(post_feedd));
    console.log("post_feedd stored")
  }

