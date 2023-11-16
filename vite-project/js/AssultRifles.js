let assaultRiflesArray = [
    {
      name: "M16A3",
      rankRequirement: 0,
      damage: 33,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "AK-47",
      rankRequirement: 20,
      damage: 45,
      range: 60,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "L85A2",
      rankRequirement: 25,
      damage: 32,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "G36",
      rankRequirement: 15,
      damage: 32,
      range: 80,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "FAMAS",
      rankRequirement: 30,
      damage: 33,
      range: 65,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Burst", "Auto"],
      magazineSize: 25
    },
    {
      name: "Scar-L",
      rankRequirement: 50,
      damage: 33,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AUG A1",
      rankRequirement: 60,
      damage: 31,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "M16A4",
      rankRequirement: 80,
      damage: 34,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Burst"],
      magazineSize: 30
    },
    {
      name: "AUG A2",
      rankRequirement: 100,
      damage: 29,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "AK-74",
      rankRequirement: 120,
      damage: 34,
      range: 65,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AUG A3",
      rankRequirement: 150,
      damage: 32,
      range: 80,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "G11K2",
      rankRequirement: 180,
      damage: 34,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Burst"],
      magazineSize: 30
    },
    {
      name: "FAL 50.00",
      rankRequirement: 200,
      damage: 38,
      range: 65,
      weaponType: "Battle Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Semi-Auto"],
      magazineSize: 20
    },
    {
      name: "AKM",
      rankRequirement: 220,
      damage: 40,
      range: 60,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "HK416",
      rankRequirement: 240,
      damage: 32,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AS VAL",
      rankRequirement: 260,
      damage: 34,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Semi-Auto"],
      magazineSize: 20
    },
    {
      name: "M231",
      rankRequirement: 280,
      damage: 29,
      range: 60,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AK-12",
      rankRequirement: 300,
      damage: 34,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "AN-94",
      rankRequirement: 320,
      damage: 32,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Burst", "Auto"],
      magazineSize: 30
    },
    {
      name: "AK-103",
      rankRequirement: 340,
      damage: 36,
      range: 65,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "M4A1",
      rankRequirement: 360,
      damage: 32,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "QBZ-95-1",
      rankRequirement: 380,
      damage: 32,
      range: 75,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto", "Burst"],
      magazineSize: 30
    },
    {
      name: "AUG A3 Para",
      rankRequirement: 400,
      damage: 32,
      range: 70,
      weaponType: "Carbine",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "M4",
      rankRequirement: 420,
      damage: 33,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "L22",
      rankRequirement: 440,
      damage: 28,
      range: 70,
      weaponType: "Carbine",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AUG A3  Para CQC",
      rankRequirement: 460,
      damage: 32,
      range: 60,
      weaponType: "Carbine",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AUG HBAR",
      rankRequirement: 480,
      damage: 32,
      range: 80,
      weaponType: "LMG",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 42
    },
    {
      name: "AUG A3  Para CQC",
      rankRequirement: 500,
      damage: 32,
      range: 60,
      weaponType: "Carbine",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "F2000",
      rankRequirement: 520,
      damage: 32,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AK-12 BR",
      rankRequirement: 540,
      damage: 34,
      range: 70,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Burst"],
      magazineSize: 30
    },
    {
      name: "G36K",
      rankRequirement: 560,
      damage: 32,
      range: 75,
      weaponType: "Carbine",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 30
    },
    {
      name: "AUG A3 BR",
      rankRequirement: 580,
      damage: 29,
      range: 80,
      weaponType: "Assault Rifle",
      weaponClass: "Assault Rifle",
      firingModes: ["Burst"],
      magazineSize: 30
    },
    {
      name: "SCAR PDW",
      rankRequirement: 600,
      damage: 33,
      range: 60,
      weaponType: "Carbine",
      weaponClass: "Assault Rifle",
      firingModes: ["Auto"],
      magazineSize: 20
    },
  ];
  