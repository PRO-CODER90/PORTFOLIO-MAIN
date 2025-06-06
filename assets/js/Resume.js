/**
 * Download CV functionality
 */

document.getElementById('download-cv').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Correct Google Drive direct download link
  const fileId = '1bjR3jtRaCozYdX4VmFN3WQylqYCCtGBe';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  // Create a temporary link element to trigger download
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', 'Hardik_Jain_Resume.pdf');
  link.setAttribute('target', '_blank'); // Fallback for mobile devices
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});