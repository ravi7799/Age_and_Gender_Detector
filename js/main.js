const imageUpload = document.getElementById('image_ag')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models')
]).then(start)

async function start() {
  //Here in the detections all the data of the image is there and we just want Age and Gender
  const detections = await faceapi.detectAllFaces(imageUpload, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors().withAgeAndGender()
  var ageGenderDetails={};
  ageGenderDetails['age']=detections[0]['age'];
  ageGenderDetails['gender']=detections[0]['gender'];
  ageGenderDetails['genderProbability']=detections[0]['genderProbability'];

  console.log(ageGenderDetails);
}