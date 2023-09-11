window.tracker
window.panelSpecies = ""
window.scrollToSpecies = ""
window.historyObj = []
window.timeout = false




window.tableFilter = document.getElementById("tableFilter")



window.openCredits = document.getElementById("openCredits")
window.closeCredits = document.getElementById("closeCredits")
window.modal = document.getElementById("modal")
window.update = document.getElementById("update")
window.backup = document.getElementById("backup")
window.overlay = document.getElementById('overlay')
window.popup = document.getElementById('popup')

window.patchnoteModeCheckbox = document.getElementById("patchnoteModeCheckbox")
window.onlyShowChangedPokemonCheckbox = document.getElementById("onlyShowChangedPokemonCheckbox")
window.onlyShowStrategyPokemonCheckbox = document.getElementById("onlyShowStrategyPokemonCheckbox")
window.strategyCheckbox = document.getElementById("strategyCheckbox")





window.graph = document.getElementById("statsGraph")
window.graphStats = [...graph.children]
window.statDisplays = [...document.querySelectorAll(".statsGraphHeader")]


window.speciesPanelMainContainer = document.getElementById("speciesPanelMainContainer")
window.speciesPanelCloseButton = document.getElementById("speciesPanelCloseButton")
window.speciesName = document.getElementById("speciesName")
window.speciesID = document.getElementById("speciesID")
window.speciesPanelInputSpecies = document.getElementById("speciesPanelInputSpecies")
window.speciesPanelInputSpeciesDataList = document.getElementById("speciesPanelInputSpeciesDataList")
window.speciesSprite = document.getElementById("speciesSprite")
window.speciesType1 = document.getElementById("speciesType1")
window.speciesType2 = document.getElementById("speciesType2")
window.speciesAbilities = document.getElementById("speciesAbilities")
window.speciesBaseStatsGraph = document.getElementById("speciesBaseStatsGraph")
window.speciesEvolutionsText = document.getElementById("speciesEvolutionsText")
window.speciesEvoTable = document.getElementById("speciesEvoTable")
window.speciesFormes = document.getElementById("speciesFormes")
window.speciesFormesText = document.getElementById("speciesFormesText")
window.speciesEggGroups = document.getElementById("speciesEggGroups")
window.speciesHeldItems = document.getElementById("speciesHeldItems")
window.speciesChanges = document.getElementById("speciesChanges")
window.speciesHeldItemsContainer = document.getElementById("speciesHeldItemsContainer")
window.speciesChangesContainer = document.getElementById("speciesChangesContainer")
window.speciesDefensiveTypeChart = document.getElementById("speciesDefensiveTypeChart")
window.recommendedCoverageContainer = document.getElementById("recommendedCoverageContainer")
window.recommendedCoverage = document.getElementById("recommendedCoverage")
window.speciesOffensiveTypeChart = document.getElementById("speciesOffensiveTypeChart")
window.speciesStrategiesContainer = document.getElementById("speciesStrategiesContainer")
window.speciesStrategies = document.getElementById("speciesStrategies")
window.speciesPanelLevelUpFromPreviousEvoTable = document.getElementById("speciesPanelLevelUpFromPreviousEvoTable")
window.speciesPanelLevelUpTable = document.getElementById("speciesPanelLevelUpTable")
window.speciesPanelTMHMTable = document.getElementById("speciesPanelTMHMTable")
window.speciesPanelTutorTable = document.getElementById("speciesPanelTutorTable")
window.speciesPanelEggMovesTable = document.getElementById("speciesPanelEggMovesTable")







window.speciesInput = document.getElementById("speciesInput")
window.speciesButton = document.getElementById("speciesButton")
window.speciesTable = document.getElementById("speciesTable")
window.speciesTableThead = document.getElementById("speciesTableThead")
window.speciesTableTbody = document.getElementById("speciesTableTbody")


window.abilitiesInput = document.getElementById("abilitiesInput")
window.abilitiesButton = document.getElementById("abilitiesButton")
window.abilitiesTable = document.getElementById("abilitiesTable")
window.abilitiesTableThead = document.getElementById("abilitiesTableThead")
window.abilitiesTableTbody = document.getElementById("abilitiesTableTbody")


window.locationsInput = document.getElementById("locationsInput")
window.locationsButton = document.getElementById("locationsButton")
window.locationsTable = document.getElementById("locationsTable")
window.locationsTableTbody = document.getElementById("locationsTableTbody")


window.movesInput = document.getElementById("movesInput")
window.movesButton = document.getElementById("movesButton")
window.movesTable = document.getElementById("movesTable")
window.movesTableThead = document.getElementById("movesTableThead")
window.movesTableTbody = document.getElementById("movesTableTbody")


window.abilitiesInputDataList = document.getElementById("abilitiesInputDataList")
window.speciesInputDataList = document.getElementById("speciesInputDataList")
window.movesInputDataList = document.getElementById("movesInputDataList")



window.table = document.querySelector("#table")

window.headerAbilitiesName = document.querySelector("#abilitiesTableThead th.ability")
window.headerAbilitiesDescription = document.querySelector("#abilitiesTableThead th.description")

window.headerMovesMove = document.querySelector("#movesTableThead th.move")
window.headerMovesType = document.querySelector("#movesTableThead th.type")
window.headerMovesSplit = document.querySelector("#movesTableThead th.split")
window.headerMovesPower = document.querySelector("#movesTableThead th.power")
window.headerMovesAccuracy = document.querySelector("#movesTableThead th.accuracy")
window.headerMovesPP = document.querySelector("#movesTableThead th.PP")
window.headerMovesEffect = document.querySelector("#movesTableThead th.effect")

window.headerSpeciesID = document.querySelector("#speciesTableThead th.ID")
window.headerSpeciesSprite = document.querySelector("#speciesTableThead th.sprite")
window.headerSpeciesName = document.querySelector("#speciesTableThead th.species")
window.headerSpeciesTypes = document.querySelector("#speciesTableThead th.types")
window.headerSpeciesAbilities = document.querySelector("#speciesTableThead th.abilities")
window.headerSpeciesHP = document.querySelector("#speciesTableThead th.baseHP")
window.headerSpeciesAtk = document.querySelector("#speciesTableThead th.baseAttack")
window.headerSpeciesDef = document.querySelector("#speciesTableThead th.baseDefense")
window.headerSpeciesSpA = document.querySelector("#speciesTableThead th.baseSpAttack")
window.headerSpeciesSpD = document.querySelector("#speciesTableThead th.baseSpDefense")
window.headerSpeciesSpe = document.querySelector("#speciesTableThead th.baseSpeed")
window.headerSpeciesBST = document.querySelector("#speciesTableThead th.BST")

window.headerLocationsSprite = document.querySelector("#locationsTableThead th.sprite")
window.headerLocationsSpecies = document.querySelector("#locationsTableThead th.species")
window.headerLocationsRarity = document.querySelector("#locationsTableThead th.rarity")
window.headerLocationsZone = document.querySelector("#locationsTableThead th.zone")

window.utilityButton = document.querySelector(".utilityButton")



headerAbilitiesName.addEventListener("click", () => {
    if(headerAbilitiesName.classList.contains("th-sort-desc"))
        sortTableByClassName(abilitiesTable, abilities, ["name"], "ability", asc = true)
    else
        sortTableByClassName(abilitiesTable, abilities, ["name"], "ability", asc = false)
})
headerAbilitiesDescription.addEventListener("click", () => {
    if(headerAbilitiesDescription.classList.contains("th-sort-desc"))
        sortTableByClassName(abilitiesTable, abilities, ["description"], "description", asc = true)
    else
        sortTableByClassName(abilitiesTable, abilities, ["description"], "description", asc = false)
})






headerMovesMove.addEventListener("click", () => {
    if(headerMovesMove.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["name"], "move", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["name"], "move", asc = false)
})
headerMovesType.addEventListener("click", () => {
    if(headerMovesType.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["type", "split"], "type", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["type", "split"], "type", asc = false)
})
headerMovesSplit.addEventListener("click", () => {
    if(headerMovesSplit.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["split", "type"], "split", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["split", "type"], "split", asc = false)
})
headerMovesPower.addEventListener("click", () => {
    if(headerMovesPower.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["power"], "power", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["power"], "power", asc = false)
})
headerMovesAccuracy.addEventListener("click", () => {
    if(headerMovesAccuracy.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["accuracy"], "accuracy", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["accuracy"], "accuracy", asc = false)
})
headerMovesPP.addEventListener("click", () => {
    if(headerMovesPP.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["PP"], "PP", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["PP"], "PP", asc = false)
})
headerMovesEffect.addEventListener("click", () => {
    if(headerMovesEffect.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, moves, ["effect"], "effect", asc = true)
    else
        sortTableByClassName(movesTable, moves, ["effect"], "effect", asc = false)
})







headerSpeciesID.addEventListener("click", () => {
    if(headerSpeciesID.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["ID"], "ID", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["ID"], "ID", asc = false)
})
headerSpeciesSprite.addEventListener("click", () => {
    if(headerSpeciesID.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["ID"], "ID", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["ID"], "ID", asc = false)
})
headerSpeciesName.addEventListener("click", () => {
    if(headerSpeciesName.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["name"], "species", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["name"], "species", asc = false)
})
headerSpeciesTypes.addEventListener("click", () => {
    if(headerSpeciesTypes.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["type1", "type2"], "types", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["type1", "type2"], "types", asc = false)
})
headerSpeciesAbilities.addEventListener("click", () => {
    if(headerSpeciesAbilities.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["abilities"], "abilities", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["abilities"], "abilities", asc = false)
})
headerSpeciesHP.addEventListener("click", () => {
    if(headerSpeciesHP.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["baseHP"], "baseHP", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["baseHP"], "baseHP", asc = false)
})
headerSpeciesAtk.addEventListener("click", () => {
    if(headerSpeciesAtk.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["baseAttack"], "baseAttack", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["baseAttack"], "baseAttack", asc = false)
})
headerSpeciesDef.addEventListener("click", () => {
    if(headerSpeciesDef.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["baseDefense"], "baseDefense", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["baseDefense"], "baseDefense", asc = false)
})
headerSpeciesSpA.addEventListener("click", () => {
    if(headerSpeciesSpA.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["baseSpAttack"], "baseSpAttack", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["baseSpAttack"], "baseSpAttack", asc = false)
})
headerSpeciesSpD.addEventListener("click", () => {
    if(headerSpeciesSpD.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["baseSpDefense"], "baseSpDefense", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["baseSpDefense"], "baseSpDefense", asc = false)
})
headerSpeciesSpe.addEventListener("click", () => {
    if(headerSpeciesSpe.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["baseSpeed"], "baseSpeed", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["baseSpeed"], "baseSpeed", asc = false)
})
headerSpeciesBST.addEventListener("click", () => {
    if(headerSpeciesBST.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, species, ["BST"], "BST", asc = true)
    else
        sortTableByClassName(speciesTable, species, ["BST"], "BST", asc = false)
})








speciesInput.addEventListener("input", e => {
    const value = e.target.value
    filterFilters(value)
    filterTableInput(value, species, ["name", "abilities"])
})
abilitiesInput.addEventListener("input", e => {
    const value = e.target.value
    if(abilitiesIngameNameArray.includes(value)){
        abilitiesInput.blur()
    }
    filterFilters(value)
    filterTableInput(value, abilities, ["name", "ingameName", "description"])
})
movesInput.addEventListener("input", e => {
    const value = e.target.value
    filterFilters(value)
    filterTableInput(value, moves, ["name", "ingameName", "effect", "description"])
})
locationsInput.addEventListener("input", e => {
    const value = e.target.value
    filterFilters(value)
    filterLocationsTableInput(value, species, ["evolutionLine"])
})
speciesPanelInputSpecies.addEventListener("input", e => {
    const value = e.target.value
    if(speciesIngameNameArray.includes(value)){
        const species = `SPECIES_${value.replaceAll(" ", "_").toUpperCase()}`
        createSpeciesPanel(species)
        window.scrollTo(0, 0)
        speciesPanelInputSpecies.blur()
        speciesPanelInputSpecies.value = ""
    }
})


speciesButton.addEventListener("click", async () => {
    if(!speciesButton.classList.contains("activeButton")){
        await tableButtonClick("species")
    }
})
abilitiesButton.addEventListener("click", async () => {
    if(!abilitiesButton.classList.contains("activeButton")){
        await tableButtonClick("abilities")
    }
})
locationsButton.addEventListener("click", async () => {
    if(!locationsButton.classList.contains("activeButton")){
        await tableButtonClick("locations")
    }
})
movesButton.addEventListener("click", async () => {
    if(!movesButton.classList.contains("activeButton")){
        await tableButtonClick("moves")
    }
})







patchnoteModeCheckbox.addEventListener("change", e => {
    lazyLoading(true)
})

onlyShowChangedPokemonCheckbox.addEventListener("change", e => {
    for(let i = 0, j = speciesTracker.length; i < j; i++){
        if(e.target.checked){
            if(species[speciesTracker[i]["key"]]["changes"].length === 0){
                speciesTracker[i]["filter"].push("changed")
            }
        }
        else{
            tracker[i]["filter"] = tracker[i]["filter"].filter(value => value !== "changed")
        }
    }
    lazyLoading(true)
})
onlyShowStrategyPokemonCheckbox.addEventListener("change", e => {
    for(let i = 0, j = speciesTracker.length; i < j; i++){
        if(e.target.checked){
            if(!strategies[speciesTracker[i]["key"]]){
                speciesTracker[i]["filter"].push("strategy")
            }
        }
        else{
            tracker[i]["filter"] = tracker[i]["filter"].filter(value => value !== "strategy")
        }
    }
    lazyLoading(true)
})










openCredits.addEventListener("click", () => {
    modal.classList.remove("hide")
    if(typeof document.createElement('dialog').showModal === 'function'){
        modal.showModal()
    }
    else if(typeof document.createElement('dialog').show === 'function'){
        modal.show()
    }

})
closeCredits.addEventListener("click", () => {
    modal.classList.add("hide")
    if(typeof document.createElement('dialog').close === 'function'){
        modal.close()
    }
})
speciesPanelCloseButton.addEventListener("click", () => {
    speciesPanel("hide")
})













const options = {
        root: null,
        rootMargins: "0px",
        threshold: 0
}

function footerIsTouching(entries){
    if(entries[0].isIntersecting){
        lazyLoading(false)
        openCredits.classList.remove("hide")
        update.classList.remove("hide")
        backup.classList.remove("hide")
    }
    else{
        openCredits.classList.add("hide")   
        update.classList.add("hide")
        backup.classList.add("hide")
    }
}


function speciesPanelIsTouching(entries){
    if(entries[0].isIntersecting){
        utilityButton.innerText = "↓"
    }
    else{

        speciesPanel("hide")

        if(table.getBoundingClientRect().top < 0){
            utilityButton.innerText = "↑"
        }
        else if(tableInput.getBoundingClientRect().top < 0){
            utilityButton.innerText = "☰"
        }
    }
}

function tableIsTouching(entries){
    if(entries[0].isIntersecting && tableInput.getBoundingClientRect().top <= 0){
        utilityButton.innerText = "☰"
    }
    else{
        if(table.getBoundingClientRect().top < 0){
            utilityButton.innerText = "↑"
        }
        else if(tableInput.getBoundingClientRect().top < 0){
            utilityButton.innerText = "☰"
        }
    }
}

function openCreditsIsTouching(entries){
    if(entries[0].isIntersecting){
        lazyLoading(false)
    }
}

const observerFooter = new IntersectionObserver(footerIsTouching, options)
observerFooter.observe(document.getElementById("footer"))

const observeTable = new IntersectionObserver(tableIsTouching, options)
observeTable.observe(document.getElementById("observerCheck"))

const observeSpeciesPanel = new IntersectionObserver(speciesPanelIsTouching, options)
observeSpeciesPanel.observe(speciesPanelMainContainer)

const observeOpenCredits = new IntersectionObserver(openCreditsIsTouching, options)
observeOpenCredits.observe(openCredits)




utilityButton.onclick = () => {
    utilityButtonOnClick()
}
document.addEventListener("keydown", e => {
    if(e.target.nodeName !== "INPUT"){
        //e.preventDefault()
        if(e.code === "Space"){
            e.preventDefault()
            utilityButtonOnClick()
        }    
        else if(e.code === "Enter" && panelSpecies !== ""){
            speciesPanel("toggle")
            window.scrollTo({ top: 0})
        }
        else if(e.code === "Escape" || e.code === "Delete"){
            speciesPanel("hide")
        }
    }
})
function utilityButtonOnClick(){
    if(utilityButton.innerText === "↓"){
        speciesPanel("hide")
        if(document.getElementById(`${scrollToSpecies}`)){
            document.getElementById(`${scrollToSpecies}`).scrollIntoView({ block: "center" })
        }
    }
    else if(utilityButton.innerText === "☰" && panelSpecies !== ""){
        speciesPanel("show")
        window.scrollTo({ top: 0})
    }
    else{
        window.scrollTo({top: 0})
    }
}



overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        overlay.style.display = 'none'
    }
})




update.addEventListener("click", () => {
    localStorage.clear()
    window.location.reload()
})

backup.addEventListener("click", async () => {
    timeout = true
    await useBackup()
})


async function useBackup(){
    console.log("Used Backup")
    history.pushState(null, null, location.href)
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    moves = await backupData[0]
    if(!localStorage.getItem("moves")){
        await localStorage.setItem("moves", LZString.compressToUTF16(JSON.stringify(moves)))
    }
    abilities = await backupData[1]
    if(!localStorage.getItem("abilities")){
        await localStorage.setItem("abilities", LZString.compressToUTF16(JSON.stringify(abilities)))
    }
    species = await backupData[2]
    if(!localStorage.getItem("species")){
        await localStorage.setItem("species", LZString.compressToUTF16(JSON.stringify(species)))
    }
    locations = await backupData[3]
    if(!localStorage.getItem("locations")){
        await localStorage.setItem("locations", LZString.compressToUTF16(JSON.stringify(locations)))
    }
    strategies = await backupData[4]
    /*
    if(!localStorage.getItem("strategies")){
        await localStorage.setItem("strategies", LZString.compressToUTF16(JSON.stringify(strategies)))
    }
    */
    typeChart = await backupData[5]

    await setDataList()
    await setFilters()
    await displaySetup()
    await displayParams(urlParams)

    await window.scrollTo(0, 0)
}

window.onbeforeunload = () => {  
    window.scrollTo(0, 0)
}


window.addEventListener('popstate', async () => {
    historyObj.pop()
    const temp = historyObj.length
    await displayHistoryObj(historyObj.slice(-1)[0])
    if(historyObj.length > 0){
        window.history.pushState(null, null, await refreshURLParams())
    }
    else{
        window.history.replaceState(null, null, await refreshURLParams())
    }

    while(historyObj.length > temp && temp > 0){
        historyObj.pop()
    }
})




fetchData()