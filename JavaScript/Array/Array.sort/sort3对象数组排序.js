const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // 根据 value 排序
  items.sort((a, b) => a.value - b.value);
  
  // 根据 name 排序
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // 忽略大小写
    const nameB = b.name.toUpperCase(); // 忽略大小写
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // name 必须相等
    return 0;
  });
  