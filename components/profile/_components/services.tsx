import { Button } from "@/components/ui/button";
import { Services } from "@prisma/client";
import AddServiceModal from "@/components/modal-windows/AddServiceModal";

export default function Service({
  services,
  isPublic,
}: {
  services: Services[];
  isPublic: boolean;
}) {
  return (
    <div className="space-y-6 pt-6 pb-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold">Services</p>
        {!isPublic && <AddServiceModal />}
      </div>

      <div className="space-y-3">
        {(!services || services?.length === 0) && (
          <div>
            <p className="text-sm">No services added yet</p>
          </div>
        )}
        {services &&
          services?.map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl border flex justify-between items-center px-2.5 py-4"
            >
              <div className="space-y-1">
                <p className="font-semibold">{service.name}</p>
                <p className="text-sm">{service?.description?.slice(0, 100)}</p>
              </div>

              <Button size="sm" variant={"secondary"}>
                ₹{service.price}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
