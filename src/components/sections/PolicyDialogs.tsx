import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PolicyDialogsProps {
  isPolicyOpen: boolean;
  setIsPolicyOpen: (open: boolean) => void;
  isOfferOpen: boolean;
  setIsOfferOpen: (open: boolean) => void;
}

const PolicyDialogs = ({ isPolicyOpen, setIsPolicyOpen, isOfferOpen, setIsOfferOpen }: PolicyDialogsProps) => {
  return (
    <>
      <Dialog open={isPolicyOpen} onOpenChange={setIsPolicyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#151C45]">
              Политика конфиденциальности
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-600">
            <p>
              Здесь будет размещена политика конфиденциальности и информация об обработке персональных данных.
            </p>
            <p>
              Вы можете добавить сюда необходимый текст о том, как компания собирает, использует и защищает персональные данные клиентов.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isOfferOpen} onOpenChange={setIsOfferOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#151C45]">
              Договор оферты
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-600">
            <p>
              Текст договора оферты будет добавлен позже.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PolicyDialogs;
