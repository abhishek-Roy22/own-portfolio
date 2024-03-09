const style = {
  button: `p-4 w-fit bg-slate-900 text-slat-100 border-none outline-none rounded-lg`,
};

const handleDownload = () => {
  const url = process.env.PUBLIC_URL + '/Resume.pdf';
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'Resume.pdf';
  anchor.click();
};

const DownloadButton = () => {
  return (
    <button className={style.button} onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadButton;
