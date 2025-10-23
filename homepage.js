function startMeeting() {
  alert("🎥 Starting a new meeting...");
}

function joinMeeting() {
  const code = document.getElementById("meetingCode").value;
  if (code.trim() === "") {
    alert("⚠️ Please enter a meeting code!");
  } else {
    alert(`🔗 Joining meeting with code: ${code}`);
  }
}