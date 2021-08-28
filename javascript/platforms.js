if (navigator.userAgent.match(/\(.*Windows.*\)/g)) {
  document.getElementById("downloadlink").href = "https://rnwk.xyz/haysy"
} else if (navigator.userAgent.match(/\(.*Ubuntu.*\)/g)) {
  document.getElementById("downloadlink").href = "https://rnwk.xyz/p9abg"
} else {
  document.getElementById("downloadcontainer").innerHTML = "<p>Minecraft, Unified</p><span>IP: <span class=\"copyable\">reflected.network</span></span>"
}
