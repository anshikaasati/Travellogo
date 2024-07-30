import PropTypes from 'prop-types';
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-black dark:text-white">Book Your Trip</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-black dark:text-white"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2"
              />
              <input
                type="text"
                placeholder="Destination"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2"
              />
              <div>
                <label className="block text-black dark:text-white mb-1">Travel Dates</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2"
                />
              </div>
              <textarea
                placeholder="Special Requests or Comments"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 h-24"
              ></textarea>
              <div className="flex justify-center mt-4">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

OrderPopup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};

export default OrderPopup;
