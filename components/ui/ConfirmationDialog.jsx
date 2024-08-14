const ConfirmationDialog = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">تأكيد الحذف</h2>
        <p className="mb-4">هل أنت متأكد أنك تريد حذف هذا العنصر؟</p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-1 ml-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            نعم
          </button>
          <button
            className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
