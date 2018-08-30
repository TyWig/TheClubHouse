using AutoMapper;
using TheClubHouse.Db.Models;

namespace TheClubHouse.ViewModels.Mappings
{
    public class RegistrationViewModelToAppUser : Profile
    {
        public RegistrationViewModelToAppUser()
        {
            CreateMap<RegistrationViewModel, AppUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}
