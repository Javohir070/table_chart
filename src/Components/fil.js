const bazz= [
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 1,
      tdTitle_2: 0,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "red",
    },
    {
      tdName:
        "Собирать схемы технологических устройств и проверять их работоспособность",
      tdTitle_1: 2,
      tdTitle_2: 0,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "green",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 3,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "yellow",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 4,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "grey",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 5,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "blue",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 5,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "black",
    },
  ];
  let filters = bazz.filter(i => typeof i.tdTitle_1 === 'number');
  console.log(filters);
  let ma = [];
  let bazaa = bazz.map(i=>(
   ma.push(i.tdTitle_1)
    
  ))
  console.log(ma);