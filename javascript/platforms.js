if (navigator.userAgent.match(/\(.*Windows.*\)/g)) {
  document.getElementById("downloadlink").href = "https://rnwk.xyz/haysy"
} else if (navigator.userAgent.match(/\(.*Ubuntu.*\)/g)) {
  document.getElementById("downloadlink").href = "https://rnwk.xyz/p9abg"
} else {
  document.getElementById("downloadcontainer").innerHTML = "<p>We weren't kidding!<br />Bedrock or Java,<br />From Anywhere</p><span class=\"ipspan\">IP: <div class=\"copyable\">reflected.network</div></span><br /><div class=\"bedrocklinks\">Instructions for <a href=\"https://www.youtube.com/watch?v=g8mHvasVHMs\">Xbox</a> or <a href=\"https://www.youtube.com/watch?v=zalT_oR1nPM\">Switch</a></div>"
}
