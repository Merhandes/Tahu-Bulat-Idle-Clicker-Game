var moneyEarned = 0;
var clickPower = 1;
var upgradeCost = 10;
var upgradeCost2 = 100;
var upgradeCost3 = 500;
var autoClickCost = 250;
var cabangCost = 800;
var autoClickInterval = null;
var clicked = false;
var jumlahupgrade = 0;
var jumlahupgrade2 = 0;
var jumlahupgrade3 = 0;
var jumlahauto = 0;
var jumlahcabang = 1;

function showMainGame() {
  document.getElementById("main-game").style.display = "block";
  document.getElementById("about-us").style.display = "none";
}

function showAboutUs() {
  document.getElementById("main-game").style.display = "none";
  document.getElementById("about-us").style.display = "block";
}

function clickObject() {
  moneyEarned += clickPower;
  document.getElementById("money-earned").innerHTML = moneyEarned;

  if (!clicked) {
    document.getElementById("imgClickAndChange").src =
      "File Pendukung/Tahu Bulat2.png";
    clicked = true;
    setTimeout(function () {
      clicked = false;
      document.getElementById("imgClickAndChange").src =
        "File Pendukung/Tahu Bulat.png";
    }, 5000);
  }
}

function buyUpgrade() {
  if (moneyEarned >= upgradeCost) {
    jumlahupgrade++;
    clickPower += 1;
    moneyEarned -= upgradeCost;
    upgradeCost *= 2;
    document.getElementById("money-earned").innerHTML = moneyEarned;
    document.getElementById("hargaupgrade").innerHTML = upgradeCost;
    document.getElementById("jumlahupgrade").innerHTML = jumlahupgrade;
    alert("Upgrade 1 Berhasil Dibeli !!");
  } else {
    alert("Uang Anda Tidak Cukup !!");
  }
}

function buyUpgrade2() {
  if (moneyEarned >= upgradeCost2) {
    jumlahupgrade2++;
    clickPower += 3;
    moneyEarned -= upgradeCost2;
    upgradeCost2 *= 3;
    document.getElementById("money-earned").innerHTML = moneyEarned;
    document.getElementById("hargaupgrade2").innerHTML = upgradeCost2;
    document.getElementById("jumlahupgrade2").innerHTML = jumlahupgrade2;
    alert("Upgrade 2 Berhasil Dibeli !!");
  } else {
    alert("Uang Anda Tidak Cukup !!");
  }
}

function buyUpgrade3() {
  if (moneyEarned >= upgradeCost3) {
    jumlahupgrade3++;
    clickPower += 7;
    moneyEarned -= upgradeCost3;
    upgradeCost3 *= 4;
    document.getElementById("money-earned").innerHTML = moneyEarned;
    document.getElementById("hargaupgrade3").innerHTML = upgradeCost3;
    document.getElementById("jumlahupgrade3").innerHTML = jumlahupgrade3;
    alert("Upgrade 3 Berhasil Dibeli !!");
  } else {
    alert("Uang Anda Tidak Cukup !!");
  }
}

function buyAutoClick() {
  if (moneyEarned >= autoClickCost) {
    jumlahauto++;
    moneyEarned -= autoClickCost;
    autoClickCost *= 3;
    document.getElementById("money-earned").innerHTML = moneyEarned;
    document.getElementById("autoclick").innerHTML = autoClickCost;
    document.getElementById("jumlahauto").innerHTML = jumlahauto;
    autoClickInterval = setInterval(clickObject, 1000);
    alert("Auto Click Berhasil Dibeli !!");
  } else {
    alert("Uang Anda Tidak Cukup !!");
  }
}

function buyCabang() {
  if (moneyEarned >= cabangCost) {
    jumlahcabang++;
    clickPower += 15;
    moneyEarned -= cabangCost;
    cabangCost *= 4;
    document.getElementById("money-earned").innerHTML = moneyEarned;
    document.getElementById("hargacabang").innerHTML = cabangCost;
    document.getElementById("jumlahcabang").innerHTML = jumlahcabang;
    alert("Cabang Tahu Bulat Berhasil Dibeli !!");
  } else {
    alert("Uang Anda Tidak Cukup !!");
  }
}

showMainGame();
