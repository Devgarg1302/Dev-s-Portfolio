import { useState} from 'react';
import { Download, ExternalLink } from 'lucide-react';
import pdf from '../../data/Dev_Inder_Garg_Resume.pdf';
export const ResumeViewer = () => {
  const [showPdf, setShowPdf] = useState(false);
  
  return (
    <>
      <div className="flex justify-center mb-16 space-x-4">
        <button 
          onClick={() => setShowPdf(true)}
          className="flex items-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105"
        >
          <ExternalLink size={20} className="mr-2" />
          View Resume
        </button>
        <a 
          href={pdf}
          download
          className="flex items-center bg-green-600 dark:bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 hover:scale-105"
        >
          <Download size={20} className="mr-2" />
          Download CV
        </a>
      </div>

      {showPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowPdf(false)}
              className="absolute top-7 right-14 text-black hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Close
            </button>
            
            <iframe
              src={`${pdf}#toolbar=0`}
              className="w-full h-full rounded-md"
              title="Resume"
            />
        
          </div>
        </div>
      )}
    </>
  );
};